"use client";

import { useEffect, useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  NOTICE_CATEGORIES,
  type NoticeInput,
  type NoticeRecord,
} from '@/lib/notice-types';

type NoticeDrafts = Record<number, NoticeInput>;

const DEFAULT_FORM: NoticeInput = {
  title: '',
  excerpt: '',
  category: 'Academic',
  dateValue: new Date().toISOString().slice(0, 10),
};

export default function NoticesAdminPage() {
  const [adminKey, setAdminKey] = useState('');
  const [notices, setNotices] = useState<NoticeRecord[]>([]);
  const [drafts, setDrafts] = useState<NoticeDrafts>({});
  const [createForm, setCreateForm] = useState<NoticeInput>(DEFAULT_FORM);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<string[]>([]);

  const canManage = useMemo(() => adminKey.trim().length > 0, [adminKey]);
  const canCreateNotice = useMemo(() => {
    return (
      createForm.title.trim().length >= 3 &&
      createForm.excerpt.trim().length >= 10 &&
      /^\d{4}-\d{2}-\d{2}$/.test(createForm.dateValue)
    );
  }, [createForm]);

  function parseApiValidationDetails(details: unknown): string[] {
    if (!details || typeof details !== 'object') {
      return [];
    }

    const flattened = details as {
      fieldErrors?: Record<string, string[]>;
      formErrors?: string[];
    };

    const nextErrors: string[] = [];

    if (flattened.fieldErrors) {
      for (const [field, errors] of Object.entries(flattened.fieldErrors)) {
        errors.forEach((error) => nextErrors.push(`${field}: ${error}`));
      }
    }

    if (flattened.formErrors) {
      flattened.formErrors.forEach((error) => nextErrors.push(error));
    }

    return nextErrors;
  }

  async function loadNotices() {
    setLoading(true);
    setMessage('');
    setFieldErrors([]);

    const response = await fetch('/api/notices', { cache: 'no-store' });
    const data = await response.json();

    if (!response.ok) {
      setMessage(data?.error || 'Unable to load notices.');
      setLoading(false);
      return;
    }

    const nextNotices = (data?.notices || []) as NoticeRecord[];
    const nextDrafts: NoticeDrafts = {};
    nextNotices.forEach((notice) => {
      nextDrafts[notice.id] = {
        title: notice.title,
        excerpt: notice.excerpt,
        category: notice.category,
        dateValue: notice.dateValue,
      };
    });

    setNotices(nextNotices);
    setDrafts(nextDrafts);
    setLoading(false);
  }

  useEffect(() => {
    loadNotices();
  }, []);

  function getAuthHeaders() {
    return {
      'Content-Type': 'application/json',
      'x-admin-key': adminKey.trim(),
    };
  }

  async function createNewNotice() {
    if (!canManage) {
      setMessage('Enter admin key to save changes.');
      return;
    }

    if (!canCreateNotice) {
      setMessage('Please complete all fields correctly before saving.');
      return;
    }

    setBusy(true);
    setMessage('');
    setFieldErrors([]);

    const response = await fetch('/api/notices', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(createForm),
    });

    const data = await response.json();
    if (!response.ok) {
      setMessage(data?.error || 'Failed to create notice.');
      setFieldErrors(parseApiValidationDetails(data?.details));
      setBusy(false);
      return;
    }

    setCreateForm(DEFAULT_FORM);
    setMessage('Notice created.');
    await loadNotices();
    setBusy(false);
  }

  async function saveNotice(id: number) {
    if (!canManage) {
      setMessage('Enter admin key to save changes.');
      return;
    }

    setBusy(true);
    setMessage('');
    setFieldErrors([]);

    const response = await fetch(`/api/notices/${id}`, {
      method: 'PUT',
      headers: getAuthHeaders(),
      body: JSON.stringify(drafts[id]),
    });

    const data = await response.json();
    if (!response.ok) {
      setMessage(data?.error || 'Failed to update notice.');
      setFieldErrors(parseApiValidationDetails(data?.details));
      setBusy(false);
      return;
    }

    setMessage('Notice updated.');
    await loadNotices();
    setBusy(false);
  }

  async function removeNotice(id: number) {
    if (!canManage) {
      setMessage('Enter admin key to save changes.');
      return;
    }

    const confirmed = window.confirm('Delete this notice?');
    if (!confirmed) {
      return;
    }

    setBusy(true);
    setMessage('');
    setFieldErrors([]);

    const response = await fetch(`/api/notices/${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-key': adminKey.trim() },
    });

    const data = await response.json();
    if (!response.ok) {
      setMessage(data?.error || 'Failed to delete notice.');
      setFieldErrors(parseApiValidationDetails(data?.details));
      setBusy(false);
      return;
    }

    setMessage('Notice deleted.');
    await loadNotices();
    setBusy(false);
  }

  function updateDraft(id: number, next: Partial<NoticeInput>) {
    setDrafts((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        ...next,
      },
    }));
  }

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl space-y-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-headline font-bold text-primary">Notices Admin</h1>
          <p className="text-muted-foreground">Create, update, and delete notices shown on the website.</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Admin Access</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Label htmlFor="adminKey">Admin key</Label>
            <Input
              id="adminKey"
              type="password"
              value={adminKey}
              onChange={(event) => setAdminKey(event.target.value)}
              placeholder="Enter Admin Password"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Create Notice</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="newTitle">Title</Label>
              <Input
                id="newTitle"
                value={createForm.title}
                onChange={(event) => setCreateForm((prev) => ({ ...prev, title: event.target.value }))}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="newDate">Date</Label>
              <Input
                id="newDate"
                type="date"
                value={createForm.dateValue}
                onChange={(event) => setCreateForm((prev) => ({ ...prev, dateValue: event.target.value }))}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="newCategory">Category</Label>
              <select
                id="newCategory"
                className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                value={createForm.category}
                onChange={(event) => setCreateForm((prev) => ({ ...prev, category: event.target.value as NoticeInput['category'] }))}
              >
                {NOTICE_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="newExcerpt">Excerpt</Label>
              <Textarea
                id="newExcerpt"
                rows={4}
                value={createForm.excerpt}
                onChange={(event) => setCreateForm((prev) => ({ ...prev, excerpt: event.target.value }))}
              />
            </div>

            <Button onClick={createNewNotice} disabled={busy || !canCreateNotice}>Save Notice</Button>
          </CardContent>
        </Card>

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-headline font-bold text-primary">Existing Notices</h2>
          <Badge variant="outline">Count: {notices.length}</Badge>
        </div>

        {loading ? (
          <p className="text-muted-foreground">Loading notices...</p>
        ) : (
          <div className="grid gap-6">
            {notices.map((notice) => (
              <Card key={notice.id}>
                <CardHeader>
                  <CardTitle className="text-lg">#{notice.id}</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor={`title-${notice.id}`}>Title</Label>
                    <Input
                      id={`title-${notice.id}`}
                      value={drafts[notice.id]?.title || ''}
                      onChange={(event) => updateDraft(notice.id, { title: event.target.value })}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor={`date-${notice.id}`}>Date</Label>
                    <Input
                      id={`date-${notice.id}`}
                      type="date"
                      value={drafts[notice.id]?.dateValue || ''}
                      onChange={(event) => updateDraft(notice.id, { dateValue: event.target.value })}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor={`category-${notice.id}`}>Category</Label>
                    <select
                      id={`category-${notice.id}`}
                      className="h-10 rounded-md border border-input bg-background px-3 text-sm"
                      value={drafts[notice.id]?.category || 'Academic'}
                      onChange={(event) => updateDraft(notice.id, { category: event.target.value as NoticeInput['category'] })}
                    >
                      {NOTICE_CATEGORIES.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor={`excerpt-${notice.id}`}>Excerpt</Label>
                    <Textarea
                      id={`excerpt-${notice.id}`}
                      rows={4}
                      value={drafts[notice.id]?.excerpt || ''}
                      onChange={(event) => updateDraft(notice.id, { excerpt: event.target.value })}
                    />
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button onClick={() => saveNotice(notice.id)} disabled={busy}>Save Changes</Button>
                    <Button variant="destructive" onClick={() => removeNotice(notice.id)} disabled={busy}>
                      Delete Notice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {message && <p className="text-sm text-muted-foreground">{message}</p>}
        {fieldErrors.length > 0 && (
          <div className="text-sm text-destructive space-y-1">
            {fieldErrors.map((error, index) => (
              <p key={`${error}-${index}`}>{error}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
