// src/app/dashboard/page.tsx
import ProtectedRoute from "@/components/ProtectedRoute";
import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  Boxes,
  Database,
  Heart,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function DashboardPage() {
    return (
        <ProtectedRoute>
            <div className="flex min-h-screen w-full flex-col">
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                        <Card x-chunk="dashboard-01-chunk-3">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">NFTs Uploaded</CardTitle>
                            <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">32</div>
                            <p className="text-xs text-muted-foreground">
                            +4 since last month
                            </p>
                        </CardContent>
                        </Card>
                        <Card x-chunk="dashboard-01-chunk-3">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">NFTs Collections</CardTitle>
                            <Boxes className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3</div>
                            <p className="text-xs text-muted-foreground">
                            +1 since last month
                            </p>
                        </CardContent>
                        </Card>
                        <Card x-chunk="dashboard-01-chunk-1">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                            Favorites
                            </CardTitle>
                            <Heart className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">50</div>
                            <p className="text-xs text-muted-foreground">
                            +180.1% from last month
                            </p>
                        </CardContent>
                        </Card>
                        <Card x-chunk="dashboard-01-chunk-2">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Storage</CardTitle>
                            <Database className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1.5 / 5 GB</div>
                            <p className="text-xs text-muted-foreground">
                            +19% usage from last month
                            </p>
                        </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                        <Card
                        className="xl:col-span-2" x-chunk="dashboard-01-chunk-4"
                        >
                        <CardHeader className="flex flex-row items-center">
                            <div className="grid gap-2">
                            <CardTitle>NFTs Uploaded</CardTitle>
                            <CardDescription>
                                Your recent NFT management activities.
                            </CardDescription>
                            </div>
                            <Button asChild size="sm" className="ml-auto gap-1">
                            <Link href="#">
                                View All
                                <ArrowUpRight className="h-4 w-4" />
                            </Link>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Item</TableHead>
                                    <TableHead>Collection</TableHead>
                                    <TableHead> Action</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Weekend 1.1</TableCell>
                                    <TableCell>Weekend</TableCell>
                                    <TableCell>Upload</TableCell>
                                    <TableCell>
                                        <Badge className="text-xs bg-accent" variant="outline">Complete</Badge>
                                    </TableCell>
                                    <TableCell>05-10-2024</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Weekend 1.0</TableCell>
                                    <TableCell>Weekend</TableCell>
                                    <TableCell>Update Meta</TableCell>
                                    <TableCell>
                                        <Badge className="text-xs bg-accent" variant="outline">Draft</Badge>
                                    </TableCell>
                                    <TableCell>05-10-2024</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Winter 3.2</TableCell>
                                    <TableCell>Winter</TableCell>
                                    <TableCell>Upload</TableCell>
                                    <TableCell>
                                        <Badge className="text-xs bg-accent" variant="outline">Complete</Badge>
                                    </TableCell>
                                    <TableCell>23-09-2024</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Summer 1.4</TableCell>
                                    <TableCell>Summer</TableCell>
                                    <TableCell>Upload</TableCell>
                                    <TableCell>
                                        <Badge className="text-xs bg-accent" variant="outline">Complete</Badge>
                                    </TableCell>
                                    <TableCell>14-09-2024</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Spring 5.0</TableCell>
                                    <TableCell>Spirng</TableCell>
                                    <TableCell>Upload</TableCell>
                                    <TableCell>
                                        <Badge className="text-xs bg-accent" variant="outline">Complete</Badge>
                                    </TableCell>
                                    <TableCell>23-06-2024</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Bearish 4.1</TableCell>
                                    <TableCell>Bear</TableCell>
                                    <TableCell>Update Meta</TableCell>
                                    <TableCell>
                                        <Badge className="text-xs bg-accent" variant="outline">Complete</Badge>
                                    </TableCell>
                                    <TableCell>05-05-2024</TableCell>
                                </TableRow>
                            </TableBody>
                            </Table>
                        </CardContent>
                        </Card>
                        <Card x-chunk="dashboard-01-chunk-5">
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-8">
                            <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                                <AvatarFallback>OM</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                NFT Upload
                                </p>
                                <p className="text-sm text-muted-foreground">
                                In Weekend Collection
                                </p>
                            </div>
                            <div className="ml-auto text-sm font-medium">5/Oct/2024</div>
                            </div>
                            <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/02.png" alt="Avatar" />
                                <AvatarFallback>JL</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                Update Metadata
                                </p>
                                <p className="text-sm text-muted-foreground">
                                In Weekend Collection
                                </p>
                            </div>
                            <div className="ml-auto text-sm font-medium">5/Oct/2024</div>
                            </div>
                            <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/03.png" alt="Avatar" />
                                <AvatarFallback>IN</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                Upload NFT
                                </p>
                                <p className="text-sm text-muted-foreground">
                                In Winter Collection
                                </p>
                            </div>
                            <div className="ml-auto text-sm font-medium">23/Sep/2024</div>
                            </div>
                            <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/04.png" alt="Avatar" />
                                <AvatarFallback>WK</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                Upload NFT
                                </p>
                                <p className="text-sm text-muted-foreground">
                                In Summer Collection
                                </p>
                            </div>
                            <div className="ml-auto text-sm font-medium">14/Sep/2024</div>
                            </div>
                            <div className="flex items-center gap-4">
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/05.png" alt="Avatar" />
                                <AvatarFallback>SD</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none">
                                Upload NFT
                                </p>
                                <p className="text-sm text-muted-foreground">
                                In Spring Collection
                                </p>
                            </div>
                            <div className="ml-auto text-sm font-medium">23/Jun/2024</div>
                            </div>
                        </CardContent>
                        </Card>
                    </div>
                </main>
            </div>
        </ProtectedRoute>
    )
  }
  